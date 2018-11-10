//Higher order component
import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props) =>(
  <div>
    <h1>Info</h1>
    <p>This is a info component {props.info}</p>
  </div>
)

const withAdminWarning =(WrappedComponent) =>{
  return(props) => (
    <div>
    {props.isAdmin&& <p>This is private info.please Don't share</p>}
    <WrappedComponent {...props} />
    </div>
  );
}

const requireAuthentication =(WrappedComponent) =>{
  return(props) =>(
    <div>
    {props.isAuthenticated?  <WrappedComponent {...props} />:<p>Please Login to continue</p>}
    </div>

  )
}
const AdminInfo= withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="there are details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are details"/>, document.getElementById('app'))
