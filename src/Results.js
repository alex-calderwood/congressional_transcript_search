import React from 'react';
import Highlighter from "react-highlight-words";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchResult extends React.Component {

    render() {
        let title = "DIRECTING THE REMOVAL OF UNITED STATES ARMED FORCES FROM HOSTILITIES IN THE REPUBLIC OF YEMEN THAT HAVE NOT BEEN AUTHORIZED BY CONGRESS"
        let lines = this.props.data.text.split('\n')
        let query = [this.props.query];

        let eachLine = (line) => {
            return <p className="line">
                    </p>
        }

        return <Row className="SearchResult">
                <Col sm={4}>
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
                    <Row>
                        <Col>
                            <span className="speaker">Mr. LEE</span>
                        </Col>
                    </Row>
                </Col>
                <Col sm={8}>

                <Highlighter highlightClassName="query"
                    searchWords={query}
                    autoEscape={true}
                    textToHighlight={this.props.data.text}/>
                </Col>
            </Row>
    }
}

export class ResultList extends React.Component {

    shouldCompoentUpdate (nextProps, nextState) {
        return (this.props.query !== nextProps.query)
    }

    render() {

        let results = this.props.results.map((result) => <SearchResult query={this.props.query} data={result}/>)

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
                            <span className="light">Related Topics</span>
                        </Col> 
                        : ''}
                    {this.props.relatedTopics.map(topic => {
                        return <Col>
                            <a href="./">{topic}</a>
                        </Col>
                    })}
                </Row>
                <Row>
                    {this.props.query !== '' ? 
                        <Col>
                    <span className="light">Speakers who mention "{this.props.query}"</span>
                        </Col> 
                        : ''}
                </Row>
            </Container>
        </div>
    }
}