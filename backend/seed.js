const dbModule = require('./db');

async function seed() {
  const db = await dbModule.init();

  const offices = [
    {name:'Mbarara Head Office', contactName:'Mr.Turyahabwe Steven', phone:'256745307372', whatsapp:'https://wa.me/256745307372', sms:'256745307372', image:'tik.jpg'},
    {name:'Ntungamo Head Office', contactName:'Mss.Birungi Blaise', phone:'256754915817', whatsapp:'https://wa.me/256754915817', sms:'256754915817', image:'blais.png'},
    {name:'Bushenyi Head Office', contactName:'Mss.Ahimbisibwe Pleasure', phone:'256741236186', whatsapp:'https://wa.me/256741236186', sms:'256741236186', image:'pleasure.png'}
  ];

  const donees = [
    {name:'Community School', description:'Providing free education to orphans.'},
    {name:'Health Clinic', description:'Basic medical services to rural families.'}
  ];

  db.serialize(() => {
    const oStmt = db.prepare('INSERT INTO offices (name, contactName, phone, whatsapp, sms, image) VALUES (?, ?, ?, ?, ?, ?)');
    offices.forEach(o => oStmt.run(o.name, o.contactName, o.phone, o.whatsapp, o.sms, o.image));
    oStmt.finalize();

    const dStmt = db.prepare('INSERT INTO donees (name, description) VALUES (?, ?)');
    donees.forEach(d => dStmt.run(d.name, d.description));
    dStmt.finalize();

    console.log('Seed data inserted');
  });
}

seed().catch(console.error);
