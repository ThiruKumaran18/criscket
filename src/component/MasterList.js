import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {MdOutlineAddCircle} from 'react-icons/md';
import {AiFillMinusCircle} from 'react-icons/ai';
import MyToaster from './elements/MyToaster';


function MasterList() {

    const getUniqueId = ()=>{ return new Date().getHours()+''+new Date().getSeconds()+''+Math.floor(Math.random() * 1000) }
    const [player, AddPlayer] = useState([{'name':'','id':getUniqueId()}]);
    const [isValid,setValid] = useState(false);
    const [showToast,setToast] = useState(false);
    const [toasterMsg,setMsg] = useState({ title : '', body : '', show:false });

    const addNewPlayerToList = ()=>{
        AddPlayer([...player,{'name':'','id':getUniqueId()}]);
    };

    const removePlayerFromList = (id)=>{
        const filtered = player.filter(p=>p.id !== id);
        AddPlayer(filtered);
    };

    useEffect(()=>{
        player.length===0 && addNewPlayerToList();
    },[player]);

    const setName = (id,e)=>{
        const name =  e.target.value;
        player.forEach(p=>{
            if(p.id===id) p.name=name; 
        });
        AddPlayer([...player]);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setValid(true);
        if(player.filter(p=>p.name==='').length!=0){
           return false;
        }else{
           localStorage.setItem('mySquad',JSON.stringify(player));
           const msg = {'body' : 'your Squad added successfully!', 'title' : 'Add my squad', 'show' : true};
           setMsg(msg);
           setToast(true);
        }
    }

    const hideToaster = (val)=>{ setToast(val); }

    return (
        <>
            <Container>
                { showToast && <MyToaster {...toasterMsg} hideToast={hideToaster} />}
                <Row className='headers'>
                    <Col> Add Players </Col>
                </Row>
                {/* Form for players */}
                <Form onSubmit={e=>handleSubmit(e)}>
                    <Form.Group className="mb-3">
                    <Form.Label className='m-3'> Click to add your squad
                        <span style={{'fontSize':'20px'}} onClick={addNewPlayerToList}> <MdOutlineAddCircle /> </span>
                    </Form.Label>
                    {player.map((item)=>{
                        return (
                            <div style={{'margin':'8px'}} key={item.id}>
                            <Row>
                                <Col>
                                    <Form.Control type="text" placeholder="Player Name" onChange={e=>setName(item.id,e)} key={item.id} name={item.name} />
                                    { isValid && item.name==='' &&  //validation message
                                        <Form.Control.Feedback style={{'display':'block'}} type="invalid"> Please enter player name </Form.Control.Feedback>
                                    }
                                </Col>
                                <Col xs={2}>
                                    <AiFillMinusCircle onClick={()=>removePlayerFromList(item.id)} key={item.id} />
                                </Col>
                            </Row>
                            </div>
                        )})
                    }
                    </Form.Group>
                    <div className='btn-row'>
                        <Button variant="primary" type="submit">Done</Button>
                    </div>
                </Form>
            </Container>
        </>
    )
}


export default MasterList;