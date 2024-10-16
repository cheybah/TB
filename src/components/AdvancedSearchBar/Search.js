import React , {Children, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import './search.css';
import { DateRange } from 'react-date-range';
import { format, compareAsc } from "date-fns";
import { enUS } from 'date-fns/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Search = () => {
const [openDate, setOpenDate] = useState(false);
const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ]);
const [openOptions, setOpenOptions] = useState(false);
const [options, setOptions] =useState({
    adult:1,
    children: 0,
    room : 1
}) ;

const handleOption = (name, operation) => {
    setOptions((prev) => {
        return{
        ...prev, 
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1 ,
        };
    });
};
    
return (
<div className="HeaderSearch">
    <div className="HeaderSearchItem">
    <FontAwesomeIcon icon={faBed} className='HeaderIcon'/>
    <input className="HeaderSearchInput" placeholder="Destination"/>
    </div>
    <div className="HeaderSearchItem">
    <FontAwesomeIcon icon={faCalendar} className='HeaderIcon'/>
    <span onClick={()=> setOpenDate(!openDate)} className="HeaderSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span> {/* Format the date using fns*/}
        
    {openDate && < DateRange
    editableDateInputs={true}
    onChange={item => setDate([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={date}
    locale={enUS}
    className='date'
    />}
    </div>
    <div className="HeaderSearchItem">
    <FontAwesomeIcon icon={faUser} className='HeaderIcon'/>
    <span onClick={()=>setOpenOptions(!openOptions)} className="HeaderSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
    {openOptions &&  <div className='options'>
    <div className='optionItem'>
        <span className='optionText'>Adult</span>
        <div className='optionCounter'>
        <button disabled= {options.adult <= 1} className='optionCounterButton' onClick={()=>handleOption("adult","d")}>-</button>
        <span className='optionCounterNumber'>{options.adult}</span>
        <button className='optionCounterButton'onClick={()=>handleOption("adult","i")}>+</button>
        </div>
        </div> 
        <div className='optionItem'>
        <span className='optionText'>Children</span>
        <div className='optionCounter'>
        <button className='optionCounterButton' onClick={()=>handleOption("children","d")}>-</button>
        <span className='optionCounterNumber'>{options.children}</span>
        <button className='optionCounterButton'onClick={()=>handleOption("children","i")}>+</button>
        </div>
        </div>
        <div className='optionItem'>
        <span className='optionText'>Room</span>
        <div className='optionCounter'>
        <button disabled= {options.room <= 1} className='optionCounterButton' onClick={()=>handleOption("room","d")}>-</button>
        <span className='optionCounterNumber'>{options.room}</span>
        <button className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
        </div>
        </div> 
    </div>}
    </div> 
</div>
    );
}

export default Search;