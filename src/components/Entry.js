import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function Entry() {

    function handleSubmit(){
        console.log({
            bid: document.getElementById("idbid").value,
            bname: document.getElementById("idbname").value,
            genre: document.getElementsByName("genre")[0].value,
            author: document.getElementById("idauthor").value,
            price: document.getElementById("idprice").value
        })
        axios.post('http://localhost:8081/entry', {
            bid: document.getElementById("idbid").value,
            bname: document.getElementById("idbname").value,
            genre: document.getElementsByName("genre")[0].value,
            author: document.getElementById("idauthor").value,
            price: document.getElementById("idprice").value
        }).then((response => {
            console.log(response.data);
        }))

    }

    function handleUpdate() {
        axios.put('http://localhost:8081/entry', {
            bid: document.getElementById("idbid").value,
            bname: document.getElementById("idbname").value,
            genre: document.getElementsByName("genre")[0].value,
            author: document.getElementById("idauthor").value,
            price: document.getElementById("idprice").value
        }).then((response => {
            console.log(response.data);
        }))
    }

    return(
        <div>
            Book ID: <input type="text" name="bid" id="idbid" /> <br/> <br/>
            Book Name: <input type="text" name="bname" id="idbname" /> <br/> <br/>
            Genre : <Select
                    id="idgenre"
                    label="Genre"
                    name="genre"
                    defaultValue="select"
                >
                <MenuItem value="select">Select Genre</MenuItem>
                <MenuItem value="Action">Action</MenuItem>
                <MenuItem value="Sci Fi">Sci Fi</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
                <MenuItem value="Fantasy">Fantasy</MenuItem>
            </Select><br/> <br/>
            Author Name: <input type="text" name="author" id="idauthor"/> <br/> <br/>
            Price: <input type="text" name="price" id="idprice"/> <br/> <br/>
            <button onClick={handleSubmit}> Save Data </button>
            <button onClick={handleUpdate}> Update Data </button>
        </div>
    );
}