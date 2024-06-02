"use client";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect } from "react";

const value = "console.log('hello world!');"
export default function Home() {

  const getBabel = () => {
    fetch('/apis/bable', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res?.json()).then(result => {
      console.log('second result', result)
    })
  }

  useEffect(() => {
    getBabel()
  }, [])

  return (
    <main className="p-24">
      <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} />
      <hr className="mt-10" />
      <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} />
      <hr className="mt-10" />
      <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} />
    </main>
  );
}
