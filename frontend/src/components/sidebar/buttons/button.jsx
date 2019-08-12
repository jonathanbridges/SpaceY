

/*
    nasaIotd:'on',
    twitterFeed: 'on',
    spaceLaunchnews:'on',
    hubbleNews: 'on',
    roverPhotos: 'on',
    modal: 'on'
 */
import React from 'react'
import {dispatchTurnOffWidget, dispatchTurnOnWidget} from '../../../actions/ui_actions'
import {dispatchUpdate} from '../../../actions/session_actions'
import {connect} from 'react-redux'


const mstp = (state, ownProps )=>{
    let settings= {user:state.session.user, ui:state.ui, widget: ownProps.widget}

    return {
        widgetValue: state.ui[ownProps.widget], settings
    }
}
const mdtp = ( dispatch)=>({
    turnOn : (value)=>dispatch( dispatchTurnOnWidget(value)),
    turnOff : (value)=>dispatch( dispatchTurnOffWidget(value)),
    update: (userData) =>dispatch( dispatchUpdate(userData))
})
const SideBarButton = ( props )=>{
    let func
    //console.log('--------this is ',props.settings,'props---------------')
    let copy = Object.assign({},props.settings.ui)
    //console.log(copy ,' before        thsi is copy')
    //console.log(copy,'--------this is copy--------')
    //copy.ui[props.widgetValue]='off'
    if(props.widgetValue ==='on'){
        func = props.turnOff.bind(this)
        copy[props.widget]='off'
    }else{
        func= props.turnOn.bind(this)
        copy[props.widget]='on'
    }
    //console.log(copy ,'after  !!!!!thsi is copy'   )
    let output={...props.settings}
    output.ui=copy

    return(<div>
        <button onClick={()=>props.update(output)}>{props.title}</button>

    </div>)
}
export default connect(mstp, mdtp)(SideBarButton)
        //<button onClick={()=>func(props.widget)}>{props.title}</button>
        //<br></br>