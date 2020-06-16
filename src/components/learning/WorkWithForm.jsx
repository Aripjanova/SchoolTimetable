import React ,{Component} from "react";
import {FormInputItems} from "./FormItems";
import  "./Form.css"


class WorkWithForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            items:[]
        }
        this.addItem=this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        var itemArray = this.state.items;


        if (this._inputElement.value!== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({
                items: itemArray
            });
            this._inputElement.value = "";
        }
        console.log(itemArray);
        e.preventDefault();
    }
    // Потратьте минутку и поймите что мы делаем. Мы создаем пере-
    // менную с именем itemArray для хранения текущего значения объ-
    // екта state элементов. Затем мы проверяем, содержит ли элемент
    // ввода какое-либо содержимое. Если он пуст, мы ничего не делаем.
    // Если элемент ввода содержит некоторый текст, мы добавляем этот
    // текст к элементу ItemArray:
    //Мы не просто добавляем введенный текст. Мы фактически добав-
    // ляем объект, который содержит как введенный текст, так и уникаль-
    // ное значение ключа, установленное в соответствии с текущим време-
    // нем (Date.now()). Если вы не знаете, почему мы указываем ключ,
    // все в порядке. Я все расскажу сейчас.
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key!== key);
        });
        this.setState({
            items:filteredItems
    });
    }
    render() {
        // var CardStyle={
        //  // justify-content: center;
        //     backgroundColor:'blue',
        //     padding:'50px',
        //     justifyContent: 'center',
        //     margin:'50px',
        //     display:'flex'
        // },
        // InputStyle={
        //     width:'200px',
        //
        //     height:'50px',
        // },
        // ButtonStyle={
        //     //marginTop:'-25px',
        //     width: '50px',
        //     height: '50px',
        //     backgroundColor: 'yellow'
        // }
        return (
            <div className="todoListMain">
                <div className="header" >


                <form onSubmit={this.addItem} >
                    <input  placeholder={"Write anything" }
                           ref={(a) => this._inputElement = a}>

                    </input>
                    <button  type={"submit"}>OK</button>

                </form>
                    <FormInputItems items={this.state.items} delete={this.deleteItem}/>

                </div>

            </div>
        );
    }
}
export default WorkWithForm