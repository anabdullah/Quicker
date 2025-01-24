import React from "react";
import image from "./ProfileImages/image.jpg";
import ContactRow from "./ContactRow";

const Contacts = () => {
  const contacts = [
    {
      userImage: image,
      number: "6005434563",
      contactName: "LALA ramdev",
      lastMasg: "Chai pi lo?",
    },
    {
      userImage: image,
      number: "8104534505",
      contactName: "Himanta mama",
      lastMasg: "Aa kolew mare ..ka kolew mare",
    },
    {
      userImage: image,
      number: "7006664985",
      contactName: "Ajay-Bimal pan masala",
      lastMasg: "Bolo zuba kesri",
    },
    {
      userImage: image,
      number: "6001234067",
      contactName: "ANA Doe",
      lastMasg: "Hi how are you?",
    },
    {
      userImage: image,
      number: "6001234520",
      contactName: "John Abraham",
      lastMasg: "Koi sa gana laga do",
    },
    {
      userImage: image,
      number: "955434567",
      contactName: "Sallu bhai",
      lastMasg: "Swag se karenge sabka swagat",
    },
    {
      userImage: image,
      number: "6001234566",
      contactName: "Jingalala hu",
      lastMasg: "Diwali pe holi manane wala",
    },
    {
      userImage: image,
      number: "6001234581",
      contactName: "Nam nahi pata",
      lastMasg: "Mtlab kuch bhi",
    },
    {
      userImage: image,
      number: "6952345673",
      contactName: "Habibulla bhai",
      lastMasg: "Touba touba sara mood kharab kar dia",
    },
    {
      userImage: image,
      number: "6451234567",
      contactName: "Munna bhai MBBS",
      lastMasg: "Apun kisi se darta nahi bhai",
    },
    {
      userImage: image,
      number: "6001404570",
      contactName: "Shahrukh khan",
      lastMasg: "Senorita, me aa gaya hu",
    },
    {
      userImage: image,
      number: "6054293367",
      contactName: "Satrangi Chacha",
      lastMasg: "Chacha ka dost Mr Dolan trump",
    },
  ];
  return (
    <div className="w-full h-[80%] overflow-y-scroll">
      {contacts.map((contact, index) => {
        return (
          <ContactRow key={index}
            userImage={contact.userImage}
            number={contact.number}
            contactName={contact.contactName}
            lastMasg={contact.lastMasg}
          />
        );
      })}
    </div>
  );
};

export default Contacts;
