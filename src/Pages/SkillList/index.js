import React, { Component, useState, useEffect, useReducer } from 'react'
import HomePage_2 from '../Example'
import edit from './edit.png'
// class HomePage1 extends Component {
//     constructor() {
//         super()
//         this.state = {
//             Time: '',
//             text: '',
//             email: 'zain@',
//             password: '',
//             weekDays: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'],
//             data: { name: 'zain', email: 'zain@' }
//         }
//     }

//     componentDidMount() {
//         if (this.state.Time == 'PM') {
//             this.setState({ text: 'time is PM' })
//         } else {
//             this.setState({ text: 'time is AM' })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.text}
//             </div>
//         )
//     }
// }

const initialState = {
    list: [
        { title: 'Web Development', flag: false },
        { title: 'Web Designing', flag: false },
        { title: 'Node.js', flag: false },
        { title: 'MongoDB', flag: false },
        { title: 'DevelopReactment', flag: false },
        { title: 'Angular', flag: false },
        { title: 'Flutter', flag: false },
        { title: 'React Native', flag: false },
        { title: 'Firebase', flag: false },
        { title: 'My Sql', flag: false },
        { title: 'Android', flag: false },
        { title: 'IOS', flag: false },
        { title: 'JavaScript', flag: false },
        { title: 'PHP', flag: false },
        { title: 'PHP Codeigniter', flag: false },
        { title: 'PHP Laravel', flag: false },
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_SELECT':
            return { ...state, ...action.payload };

        default:
            return state;
    }
}

function SkillList(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    function selectedItem(item, index) {
        // console.log("list=>", list)
        // list[index].flag = !list[index].flag
        // console.log("list=>", list)
        // setList(list)
        state.list[index].flag = !state.list[index].flag
        dispatch({
            type: 'ON_SELECT',
            payload: {
                ['list']: state.list,
            },
        });
    }

    return (
        <>
            <h3 style={{
                float: 'left',
                fontFamily: 'monospace',
                margin: '10px'
            }}>Select skills</h3>
            <div className='container-fluid' style={{
                height: 'auto',
                padding: '10px',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {state.list.map((item, index) => {
                    console.log("item=>", item)
                    return (
                        <div key={index} onClick={() => selectedItem(item, index)} style={{
                            margin: '5px 2px 5px 2px',
                            padding: '0px 10px 0px 10px',
                            borderRadius: '15px',
                            borderStyle: 'solid',
                            borderWidth: '0.01px',
                            cursor: 'pointer',
                            flexDirection: 'row',
                            display: 'flex',
                            backgroundColor: `${item.flag ? '#cad8ba' : 'white'}`,
                            boxShadow: `${item.flag ? '-1px 2px 10px -1px grey' : '0px 0px 0px 0px'}`
                            // flexDirection: 'row'
                        }}>
                            <img src={edit} style={{ border: 'solid' }} style={{
                                height: '18px',
                                margin: '4px'
                            }} />
                            <p style={{
                                margin: '0px', color: `${item.flag ? 'black' : 'black'}`
                            }}>{item.title}</p>
                        </div>
                    )
                })}

            </div >
        </>
    )
}

export default SkillList
