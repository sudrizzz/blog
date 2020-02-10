import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

class MainPage extends Component {
    state = {
        articles: []
    }

    componentDidMount = async () => {
        const api_call = await fetch(`/articles/${this.props.match.params.id}`);
        const data = await api_call.json();
        this.setState({ articles: data });
        console.log(data);
    }

    render() {
        const article = this.state.articles;
        return (
            <div
                style={{
                    maxWidth: '800px',
                    textAlign: 'left',
                    margin: 'auto',
                    padding: '1rem'
                }}>
                <Title>{article.title}</Title>
                <Paragraph>{article.content}</Paragraph>
            </div>
        );
    }
}

export default MainPage;