import React from 'react';

export interface SpanCustomProps {
    text: string;
}

const SpanCustom = (props: SpanCustomProps) => {
    const { text} = props;
    return(<span>{text}</span>)
}

export default SpanCustom;