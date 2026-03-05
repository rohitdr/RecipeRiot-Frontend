
export default function Alert(props) {
  return (
    <>
      {props.alert && (
        
          <div
            className={`alert alert-${props.alert.type} sticky-top  w-100  alert-dismissible  d-flex align-items-center`}
            role="alert"
          
          >
            <div>
              <strong>{props.alert.message}</strong>
            </div>
          </div>
    
      )}
    </>
  );
}
