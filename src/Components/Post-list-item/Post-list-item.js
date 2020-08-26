import React, {Component} from 'react'
//import ReactDOM from "React-dom";
import './Post-list-item.css'

export default class PostListItem extends Component{
    // state 
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
    
    this.ClickImportant = this.ClickImportant.bind(this)
    this.ClickLike = this.ClickLike.bind(this)
    };


    //function 
    ClickImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }


    ClickLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }


    render(){

        const {lable, onDelete} = this.props
        const {important} = this.state
        let classNames = ' app-list-item d-flex justify-content-between '
        
        if (important){
            classNames += " important"
        }


        return(
            <li className={classNames}>
                    <span 
                    className='app-list-item-label'
                    onClick={this.ClickLike}>
                        {lable}
                    </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                    type='button' 
                    className="btn-star btn-sm"
                    onClick={this.ClickImportant}>
                        <i className="fa fa-star"></i>
                    </button>
    
                    <button
                    type='button' 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button >
                        <i className="fa fa-heart"></i>
                </div>
            </li>
        )
        
    }
}


