import React from "react";

class Menu extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ion-icon size="large" id="menuhamb" name="menu-sharp"
                      onclick="document.getElementById('meumenu').style.left = '0px'">
                    </ion-icon>
                    <div className="logoapp logomini"></div>
                    <div id="meumenu">
                        <div className="boxed">
                            <ion-icon size="large" id="xfechar" name="close"
                              onclick="document.getElementById('meumenu').style.left = '-350px'">
                            </ion-icon>

                            <span className="menusaldo">
                                VALOR TOTAL<br />
                                <b>{this.props.valortotal}</b>
                            </span>

                            <div className="btmenu">
                                <button>
                                    <ion-icon name="arrow-redo"></ion-icon>
                                    Contas a pagar
                                </button>

                                <button>
                                    <ion-icon name="arrow-undo"></ion-icon>
                                    Contas a receber
                                </button>
                            </div>
                        </div>
                        <a href="/" className="sair">
                            Sair <ion-icon name="log-out"></ion-icon>
                        </a>
                    </div>


                    <div className="valortotal">
                        <span>Saldo: </span><b>{this.props.valortotal}</b>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;