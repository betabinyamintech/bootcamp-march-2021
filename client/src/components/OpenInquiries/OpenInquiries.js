import react from 'react';

const OpenInquiries = (props) =>{

    if (props.inquiries.length === 0){
        <div className = "emptyInquiries">
            <h3>אין שאלות</h3>
            <h4>הכל ברור לך, אחלה!</h4>
        </div>
    }

    return (
    <div className = "inquiriesBox">
        {props.inquiries.map((inquiry) => {
            <Inquiry id = {placeholder} props = {inquiry} /> //place holder values!!
        })}
        
    </div>
    )
}

export default OpenInquiries;