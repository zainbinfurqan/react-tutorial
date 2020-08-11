import React, { useReducer } from 'react';


const inisialState = {
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

function SkillChips(props) {

    const [state, dispatch] = useReducer(reducer, inisialState)



    function selectItem(item, index) {
        state.list[index].flag = !state.list[index].flag
        dispatch({
            type: 'ON_SELECT',
            payload: state.list
        })
    }

    return (
        <>
            <h3>Select skils</h3>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {state.list.map((item, index) => {
                    return (
                        <div key={index} style={{
                            border: 'solid 0.5px',
                            margin: '10px',
                            padding: '5px',
                            borderRadius: '25px',
                            backgroundColor: `${item.flag ? '#cad8ba' : 'white'}`,
                            boxShadow: `${item.flag ? '-1px 2px 10px -1px grey' : '0px 0px 0px 0px'}`
                        }} onClick={() => selectItem(item, index)}>
                            <p style={{ margin: '0px', color: `${item.flag ? 'white' : 'black'}` }}>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SkillChips;