import React, { Component } from 'react';
import { Typography } from 'antd';
import '../../style/SinglePage.css';

const { Title, Text } = Typography;

class SinglePage extends Component {
    state = {
        articles: []
    }

    componentDidMount = async () => {
        const api_call = await fetch(`/articles/${this.props.match.params.id}`);
        const data = await api_call.json();
        this.setState({ articles: data });
    }

    render() {
        const article = this.state.articles;
        return (
            <div className="content">
                <Title>{article.title}</Title>
                <Text>{article.content}</Text>
            </div>
        );
    }
}

export default SinglePage;