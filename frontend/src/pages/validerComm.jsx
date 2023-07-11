// import React from "react";
// import "./OrderValidationPage.css";

// const OrderValidationPage = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//   };

//   return (
//     <div className="container">
//       <main className="main">
//         <div className="content">
//           <div className="order-validation">
//             <div className="order-validation-title">
//               <h1>Valider la Commande</h1>
//             </div>
//             <div className="order-validation-content">
//               <div className="details-de-facturation">
//                 <h2>Détails de Facturation</h2>
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-row">
//                     <div className="form-group col-md-6">
//                       <label htmlFor="firstName">Prénom</label>
//                       <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                     <div className="form-group col-md-6">
//                       <label htmlFor="lastName">Nom</label>
//                       <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="form-group col-md-6">
//                       <label htmlFor="email">Adresse Email</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                     <div className="form-group col-md-6">
//                       <label htmlFor="phoneNumber">Numéro de Téléphone</label>
//                       <input
//                         type="tel"
//                         id="phoneNumber"
//                         name="phoneNumber"
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="form-group">
//                     <label htmlFor="address">Adresse</label>
//                     <input
//                       type="text"
//                       id="address"
//                       name="address"
//                       className="form-control"
//                       required
//                     />
//                   </div>
                 
//                 </form>
//               </div>
//               <div className="information-complementaires">
//                 <h2>Informations Complémentaires</h2>
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="additionalDetails">
//                       Détails Supplémentaires
//                     </label>
//                     <textarea
//                       id="additionalDetails"
//                       name="additionalDetails"
//                       className="form-control"
//                       rows="4"
//                     ></textarea>
//                   </div>
//                   {/* More form fields for additional information */}
//                 </form>
//               </div>
//               <div className="votre-commande">
//                 <h2>Votre Commande</h2>
//                 <div className="order-summary">
//                   {/* Order summary details */}
//                   <div className="order-item">
//                     <div className="order-item-details">
//                       <span className="item-name">Product 1</span>
//                       <span className="item-price">$10.00</span>
//                     </div>
//                     <div className="order-item-quantity">x 2</div>
//                   </div>
//                   {/* More order items */}
//                   <div className="order-total">
//                     <span>Total</span>
//                     <span className="total-price">$20.00</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="paiement">
//                 <h2>Paiement</h2>
//                 <form onSubmit={handleSubmit}>
//                   {/* Form fields for payment */}
//                   <div className="form-row">
//                     <div className="form-group col-md-6">
//                       <label htmlFor="cardNumber">Numéro de Carte</label>
//                       <input
//                         type="text"
//                         id="cardNumber"
//                         name="cardNumber"
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                     <div className="form-group col-md-6">
//                       <label htmlFor="expirationDate">Date d'Expiration</label>
//                       <input
//                         type="text"
//                         id="expirationDate"
//                         name="expirationDate"
//                         className="form-control"
//                         required
//                       />
//                     </div>
//                   </div>
//                   {/* More form fields for payment */}
//                 </form>
//               </div>
//               <div className="action-buttons">
//                 {/* Action buttons */}
//                 <button type="submit" className="btn btn-primary">
//                   Valider
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OrderValidationPage;
