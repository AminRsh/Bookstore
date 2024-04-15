import RractMarkdown from "react-markdown"

interface MarkdownProps {
    children: string
}

const Markdown = ({children}: MarkdownProps) => {
    return <RractMarkdown
    className="space-y-3"
    components={{
        ul: (props) => <ul className="list-inside list-disc" {...props}/>,
        a: (props) => <a className="text-green-500 underline" target="_blank" {...props}/>
    }}
    >
        {children}
    </RractMarkdown>
}

export default Markdown