import { Component, PropsWithChildren } from 'react'

export default class NewTabLink extends Component<
    PropsWithChildren<{ url: string }>,
    {}
> {
    render() {
        // eslint-disable-next-line
        return (
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                {this.props.children}
            </a>
        )
    }
}
