import { marked } from 'marked';
import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'
import { readFileSync } from 'fs';
import { Divider, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Textarea } from '@chakra-ui/textarea';
import { RadioGroup } from '@chakra-ui/radio';
import { docs_menu_options, FRONTEND_ROOT_URL } from '../config';
// import {readFile} from 'react-fs'

function DocName({doccontent}) {

  const router = useRouter();

    React.useEffect(() => {

      console.log(router.asPath.slice(1, router.asPath.length))

    }, [router.asPath])

    return (
    <div className="docs__content_main">
      <div style={{padding: '2rem'}} className="docs__content" dangerouslySetInnerHTML={{__html:marked(doccontent)}} />
      <Divider width="100%"/>
      <FeedbackForm />
    </div>
  )
}

function FeedbackForm() {

  const [feedbackAction, setFeedbackAction] = React.useState(null)
  const [feedback, setFeedback] = React.useState('')
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {

    setLoading(true);

    const response = await fetch(`${FRONTEND_ROOT_URL}api/submit_feedback/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        page: window.location.pathname.slice(1),
        action: feedbackAction === 'like',
        feedback: feedback
      })
    })
    
    setLoading(false)

    if(response.status === 201){

      alert("Thanks for your feedback!")

    }


  }


  return (

    <div style={{padding: '2rem'}}>
    <Text variant="h3" as='' color="gray.400">Was this page helpfull?</Text>
    <Button isActive={feedbackAction === "like"} onClick={() => {feedbackAction !== "like" ? setFeedbackAction("like"): setFeedbackAction(null)}} variant="outline" size="xs" colorScheme="twitter" mr="5" mt="5">Yes</Button>
    <Button  isActive={feedbackAction === "dislike"} onClick={() => {feedbackAction !== "dislike" ? setFeedbackAction("dislike"): setFeedbackAction(null)}} variant="outline" size="xs" colorScheme="twitter" mt="5">No</Button>
    <br />
    <Textarea value={feedback} onChange={(e) => {setFeedback(e.target.value)}} className="content__textarea" placeholder="Feedback" mt="5" width="max(300px, 50%)"></Textarea>
    <br />
    <Button onClick={handleSubmit} isDisabled={feedbackAction === null || feedback.length <= 2} isLoading={false} variant="solid" size="sm" mt="5">Submit</Button>
  </div>

  )

}

export async function getStaticPaths() {

  const docs_paths = docs_menu_options.map((val, idx) => {
    return {params: {docname: val.name}}
  })

  return {
    paths:[
      ...docs_paths
    ]
    ,
    fallback: false
  }

}

export async function getStaticProps(context) {

  const { docname } = context.params;

  console.log("POPOPOPO:",docname)

  const body = readFileSync(path.resolve(`./public/_docs/${docname === '' ? 'welcome' : docname}.md`), 'utf-8');

  return {
    props: {
      doccontent: body
    }
  }

} 

export default DocName