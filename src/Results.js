import React from 'react';
import Highlighter from "react-highlight-words";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchResult extends React.Component {

    render() {
        let lines = this.props.text.split('\n')

        let eachLine = (line) => {
            return <p className="line">
                <Highlighter highlightClassName="query"
                    searchWords={[this.props.query]}
                    autoEscape={true}
                    textToHighlight={line}/>
                </p>
        }

        return <Row className="SearchResult">
                <Col sm={4}>
                <Highlighter 
                    className="title"
                    highlightClassName="query"
                    searchWords={[this.props.query]}
                    autoEscape={true}
                    textToHighlight="DIRECTING THE REMOVAL OF UNITED STATES ARMED FORCES FROM HOSTILITIES IN THE REPUBLIC OF YEMEN THAT HAVE NOT BEEN AUTHORIZED BY CONGRESS"/>
                </Col>
                <Col sm={8}>
                    {lines.map(eachLine)}
                </Col>
            </Row>
    }
}

export class ResultList extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldCompoentUpdate (nextProps, nextState) {
        return (this.props.query !== nextProps.query)
    }

    render() {
        // const queryToken = '$QRY$'
        // let result = this.props.result.replace(this.props.query, queryToken)

        // if (this.props.result === '') 
        //     return <div></div>

        // let result = this.props.result.split(this.props.query).reduce((prev, current, i) => {
        //   // console.log('prev', prev, 'current', current, i);
        //   if (!i) {
        //     return [current];
        //   }
        //   return prev.concat(<span className='query'>{this.props.query}</span>, current)
        // }, []);

        // console.log(typeof(result))
        // let result = this.props.result.split('\n').map((text) => {
        //   return <p>{text}</p>
        // })

        // && this.props.results[0] === ''

        let results = this.props.results.map((result) => <SearchResult query={this.props.query} text={result}/>)

        return <Container className='ResultList'>
                {results}
        </Container>
    }
}

export class RelatedTopics extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.relatedTopics)
    }

    render() {
        return <Container className='RelatedTopics'>
            <Row>
                {this.props.query !== '' ? <Col>
                    <span className="Light bold">Topics Related to {' ' + this.props.query} </span>:</Col> : ' '}
                {this.props.relatedTopics.map(topic => {
                    return <Col>
                        {topic}
                    </Col>
                })}
            </Row>
        </Container>
    }
}