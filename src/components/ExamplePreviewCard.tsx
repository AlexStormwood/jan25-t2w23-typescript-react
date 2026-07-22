

export type PreviewCardProps = {
    title: string;
    description: string;
}

export function ExamplePreviewCard({title, description}: PreviewCardProps){

    return <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
}