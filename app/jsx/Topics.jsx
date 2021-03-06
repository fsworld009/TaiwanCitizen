var React = require("react");
import { connect } from 'react-redux';
var _ = require("lodash");
var util = require("../js/util.js");

function loadTopics(){
    return function(dispatch){
      dispatch({
            type: "LOADING",
            loading: true
      });
      $.getJSON("/services/topics/", function(data){
        dispatch({
          type: "LOADING",
          loading: false,
          content: {
            page: "topics",
            data: data
          }
        });
      });
    };
};


function mapStateToProps(state){
  return {
    topics: state.get("topics")
  };
}

function mapDispatchToProps(dispatch){
  return {
    loadTopics: function(){
      dispatch(loadTopics());
    }
  };

}
var Page = React.createClass({
  render: function(){
  console.log("headings", this.props.headings);
  if(typeof this.props.topics == "undefined"){
    this.props.loadTopics();
    return (<span><i className="fa fa-spin fa-spinner fa-lg"></i> Loading...</span>);
  }else{
    return (
           <div className="ui items">
            {
              util.listToComponents(this.props.topics, function(topic, key){
                return (
                  <div key={key} className="item">
                    <div className="image" style={{width:"40em"}}>
                      <img src={"/images/topics/" + topic.id + "/banner.jpg"} />
                    </div>
                    <div className="content">
                      <a className="header">{topic.title}</a>
                      <div className="meta">
                        <span>{topic.caption}</span>
                      </div>
                      <div className="description">
                        {topic.preview}
                      </div>
                      <div className="extra">
                      </div>
                      <button className="pull-right ui green button">Read more..</button>
                    </div>
                  </div>
              );

              })
            }
           </div>   
        );
    }
  }
});

var PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);
module.exports = PageContainer;
