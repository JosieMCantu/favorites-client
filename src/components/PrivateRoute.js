
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({render: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (rest.token 
            ? <Component {...props} {...rest} /> 
            : <Redirect to='/SigninPage' />)}
            />
    )
}
export default PrivateRoute