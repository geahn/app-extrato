import React from "react";

class Menu extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ion-icon size="large" id="menuhamb" name="menu-sharp"></ion-icon>
                    <div id="meumenu">
                        <ion-icon size="large" name="close"></ion-icon>
                    </div>


                    <div className="valortotal">
                        <span>Saldo:</span><span>{this.props.valortotal}</span>
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;