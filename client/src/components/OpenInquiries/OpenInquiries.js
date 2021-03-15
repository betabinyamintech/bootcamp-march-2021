import react from 'react';
import Inquiry from '../Inquiry/Inquiry';

const OpenInquiries = ({ inquiries }) => {

    if (inquiries.length === 0) 
        return <div className="emptyInquiries">
            <h3>אין שאלות</h3>
            <h4>הכל ברור לך, אחלה!</h4>
        </div>;

return <div className="inquiriesBox">
    {props.inquiries.map((inquiry) => {
        <Inquiry id={placeholder} inquiry={inquiry} /> //place holder values!!
    })}

</div>
    
}

export default OpenInquiries;