// import React from 'react'
// import "./Contact.css"
// import { maintenance } from '../../assets/img/brand'

// const Contact = () => {
//   return (
//     <div className='contact bg1 secTop2'>
//       <div className="container p20">
//         <h3 className="sectionTitle">Contact</h3>
//         <div className="mainTimgCont">
//           <img src={maintenance} alt="maintenance" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact

// import { useForm } from 'react-hook-form';
// import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion";
import "./Contact.css";
// import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
// import HText from '@/shared/H.Text';

const ContactUs = () => {
  // const { register, trigger, formState: { errors } } = useForm();

  const onSumbit = async (e) => {
    // const isValid = await trigger()
    // if (!isValid) {
    //     e.preventDefault()
    // }
  };
  return (
    <section id="contacts" className="contact bg1 secTop2">
      <motion.div className="container p20">
        {/* HEADER */}
        <motion.div
          className="textContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="sectionTitle">Contact</h2>
          <p className="para">We are ready to build your dream structure</p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <motion.div
          className="formContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            className="form"
            onSubmit={onSumbit}
            action="https://foemsubmit.co/your@emial.com"
            method="POST"
          >
            <input
              className="inputItem"
              placeholder="Name"
              type="text"
            />
            <input
              className="inputItem"
              placeholder="Email"
              type="text"
            />
            <textarea
              className="inputItem"
              placeholder="Message"
              rows={8}
              cols={50}
            />
            <div className="buttonCont">
              <button type="submit" className="btn2">
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
