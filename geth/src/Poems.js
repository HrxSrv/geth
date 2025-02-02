import React from 'react';

const PoemsPage = () => {
  const poems = [
    {
      title: "कितनो की गुद्दि खोल गया",
      author: "Harshit Srivastav",
      content: `मैं बांध धारा को सीने में
बांट विष अमृत पीने में
ऐसे वचन कुछ बोल गया
कितनो की गुद्दि खोल गया

उपनाम मेरा गदराई गव
शुभनाम मेरा छोटा यादव
उदर है मेरा ऐरावत
किलियन को थॉमस बोल गया
जो किया ज्ञान पे प्रश्न कभी
औकात तुम्हारी तोल गया
कितनो की गुद्दि खोल गया ।

जिस बाट ना कोई घूम सका
जिस ताल न कोईं झूम सका,
माहे बसंत का भान नहीं, 
तुम्हारी स्थिति का संज्ञान नहीं
तोड़ मनोबल तने से।
ऐसी डगर को डोल गया
कितनो की गुद्दि खोल गया ।

मित्रो का कंठ सुखा कर के
उनका छोटा छिद्र बढ़ा कर के
कह साफ धरा का पानी है
वीर्य रस मुंह में घोल गया
कितनो की गुद्दि खोल गया।

`
    },
    {
      title: "उनके गूदे फट जाते है",
      author: "Abhyuday Singh",
      content: `"मन में भीषण हुंकार लिए,
स्तन दो दो विकराल लिए,
पैरो में उजली नाल लिए,
थॉमस शेल्बी से बाल लिए,
दैत्यरूप जो आया है,
तुमने अबतक क्या पाया है,
शेषनाग सी छाया है,
शब्दो में उसके माया है,
आगे पीछे जो आते है,
उनके गूदे फट जाते है,
रक्त गिरा के वही जमी पे,
रिस्ते रिस्ते जाते है,
बींध तुम्हे वह क्षणभर में 
इस धरती में दफना देगा,
स्वर मात्र से वीर्यक्षिद्र को
मोटी चूत बना देगा,
तू उसके उत्कृष्ट कपाल देख,
ऐरावत से गाल देख,
डरता है किसकी लीला से,
रूममेट्स का हाल देख,
भय का भी तू काल देख,
दंगो का ये तू साल देख,
भयहीन स्वयं को कहता है,
ले गदराई सी चाल देख।
,`
    }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '50px',
        borderBottom: '2px solid #333',
        paddingBottom: '20px'
      }}>
        <h1 style={{
          fontSize: '2.5em',
          color: '#333',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>Yadav-Manthan</h1>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px'
      }}>
        {poems.map((poem, index) => (
          <div key={index} style={{
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '25px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <h2 style={{
              color: '#2c3e50',
              fontSize: '1.5em',
              marginBottom: '10px',
              borderBottom: '1px solid #eee',
              paddingBottom: '10px'
            }}>{poem.title}</h2>
            <h3 style={{
              color: '#7f8c8d',
              fontSize: '1em',
              marginBottom: '15px',
              fontStyle: 'italic'
            }}>by {poem.author}</h3>
            <p style={{
              color: '#34495e',
              lineHeight: '1.6',
              whiteSpace: 'pre-line',
              fontSize: '1.1em'
            }}>{poem.content}</p>
          </div>
        ))}
      </div>

      <footer style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        borderTop: '1px solid #ddd',
        color: '#666'
      }}>
        <p>© 2024 Yadav-Manthan Poetry Collection. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PoemsPage;