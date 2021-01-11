import React from 'react';
import Modal from 'react-modal';


const OptionModel = (props) => (
        <div>
            <Modal 
                isOpen={!!props.selectedOptions}
                contentLabel="Selected Option"
                onRequestClose={props.handleCloseModal}
                closeTimeoutMS={200}
                className="modal"
            >
            <h3 className="modal__title">You can do </h3>
            {props.selectedOptions && <p className="modal__body">{props.selectedOptions}</p>}    
            <button onClick={props.handleCloseModal}>Okay</button>
            </Modal>
        </div>
);

Modal.setAppElement(document.getElementById('app'))
export default OptionModel;
 
// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
//   };
   
//   // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement('#yourAppElement')
   
//   function App(){
//     var subtitle;
//     const [modalIsOpen,setIsOpen] = React.useState(false);
//     function openModal() {
//       setIsOpen(true);
//     }
   
//     function afterOpenModal() {
//       // references are now sync'd and can be accessed.
//       subtitle.style.color = '#f00';
//     }
   
//     function closeModal(){
//       setIsOpen(false);
//     }
   
//       return (
//         <div>
//           <button onClick={openModal}>Open Modal</button>
//           <Modal
//             isOpen={modalIsOpen}
//             onAfterOpen={afterOpenModal}
//             onRequestClose={closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//           >
   
//             <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
//             <button onClick={closeModal}>close</button>
//             <div>I am a modal</div>
//             <form>
//               <input />
//               <button>tab navigation</button>
//               <button>stays</button>
//               <button>inside</button>
//               <button>the modal</button>
//             </form>
//           </Modal>
//         </div>
//       );
//   }
   
//   ReactDOM.render(<App />, appElement);