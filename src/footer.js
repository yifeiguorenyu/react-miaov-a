import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    let { length, selectLength,listState,likeLength,removeSelect,likeSelect,cancelLink,lookListState } = this.props;
    return (
      <footer
        style={{
          display: length ? "block" : "none"
        }}
      >
        <div className="info">
          <span
            className="align-right"
            style={{
              display: selectLength ? "block" : "none"
            }}
          >
            当前选中 {selectLength}
            首歌曲
          </span>
          <span>
            共 {length}
            首歌曲
          </span>
        </div>
        <input
          type="button"
          value="删除选中歌曲"
          style={{
            display: selectLength ? "inline-block" : "none"
          }}
          onClick={()=>{removeSelect()}}
        />
        <input
          type="button"
          value="收藏选中歌曲"
          style={{
            display: selectLength ? "inline-block" : "none"
          }}
          onClick={()=>{
            likeSelect()
          }}
        />
        <input
          type="button"
          value="取消收藏选中歌曲"
          style={{
            display: selectLength ? "inline-block" : "none"
          }}
          onClick={()=>{cancelLink()}}
        />
        <input type="button" value="查看收藏清单" 
        onClick={()=>{
            lookListState(false)
        }}
        style={{display:listState&&likeLength?"":"none"}}/>
        <input type="button" value="查看所有清单"  
         onClick={()=>{
            lookListState(true)
        }}
        style={{display:!listState?"":"none"}}/>
      </footer>
    );
  }
}
