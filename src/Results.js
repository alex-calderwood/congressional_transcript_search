import React from 'react';
import Highlighter from "react-highlight-words";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: props.data.text};
        this.expanded = false;
    }

    render() {
        let title = this.props.data.title;
        let query = [this.props.query];

        return <div onClick={this.expandContext.bind(this)} className="SearchResult">
            <Row >
                <Col sm={4}>
                    <Row>
                        <Col>
                            <span className="light italic">Speaker </span><a href="./" className="related">{this.props.data.speaker}</a> <span className="date">{this.props.data.date}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Highlighter 
                            className="title"
                            highlightClassName="query"
                            searchWords={query}
                            autoEscape={true}
                            textToHighlight={title}/>
                        </Col>
                    </Row>
                </Col>
                <Col sm={8}>

                <Highlighter highlightClassName="query"
                    searchWords={query}
                    autoEscape={true}
                    textToHighlight={this.state.text}/>
                </Col>

            </Row>
            <a onClick={this.expandContext.bind(this)} className="light italic context">Expand context {this.props.data.pages}...</a>
        </div> 
    }

    expandContext() {
        if (this.expanded) {
            this.setState({text: this.props.data.text});
            this.expanded = false;
        } else {
            fetch('./data/fullText.txt')
                .then((response) => response.text())
                .then(text => {this.setState({text: text})});
            this.expanded = true;
        }
    }
}

export class ResultList extends React.Component {

    shouldCompoentUpdate (nextProps, nextState) {
        return (this.props.query !== nextProps.query)
    }

    render() {
        let results = this.props.results.map((result, i) => <SearchResult key={i} query={this.props.query} data={result}/>)

        return <Container className='ResultList'>
                {results}
        </Container>
    }
}

export class RelatedTopics extends React.Component {

    render() {
        return <div className='RelatedTopics'>
            <Container >
                <Row>
                    {this.props.query !== '' ? 
                        <Col>
                            <span className="dark">Topics related to "{this.props.query}"</span>
                            {this.props.relatedTopics.map((topic, i) => {
                                return <Col key={i}>
                                    <a className="related" href="./">{topic}</a>
                                </Col>
                            })}
                        </Col>
                        : ''}
                    
                    {this.props.query !== '' ? 
                        <Col>
                            <span className="dark">Speakers who mention "{this.props.query}"</span>
                            {this.props.speakerMentions.map((speaker, i) => {
                                return <div key={i}>
                                    <a className="related" href="./">{speaker}</a> <span className="light">3 times</span>
                                </div>
                            })}
                        </Col>
                    : ''}
                </Row>
            </Container>
        </div>
    }
}