import React,{Component} from "react";

export class chat extends Component {
    
    componentDidMount() {
        if (!window.kommunicate) {
          (function(d, m){
            var kommunicateSettings = {"appId":"3686b3d4048c33e7ae6f46b9222339dae","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        }
      }
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default chat;