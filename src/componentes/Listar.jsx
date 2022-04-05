
import React from 'react';

class Listar extends React.componentes{

    constructor(props){
        super(props);
        this.state = {}

    }
    render(){
        return(<table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>CORREO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Oscar</td>
                    <td>oscarp@gmail.com.co</td>
                </tr>
             
            </tbody>
        </table>);
    }
}