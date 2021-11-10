import React, {useState} from "react";

export default function Contacts (props) {
    const {contact, index} = props
    const [isHidden, setHide] = useState(true)

                return(
                    <li key={index}>
                        <p>{contact.name.last}</p>
                        <img src={contact.picture.thumbnail} />
                        <br/>
                        <br/>
                        <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}>
                            {isHidden ?
                                <div>Show</div> :
                                <div>
                                    Hide
                                </div>
                            }
                        </button>

                            {isHidden ?
                                <p></p> :
                                <div>
                                    <p>{contact.dob.age}</p>
                                    <p>{contact.email}</p>
                                    <p>{contact.phone}</p>

                                </div>
                            }
                    </li>
               )
}