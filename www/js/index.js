// document.addEventListener("deviceready", onDeviceReady, false);

//     // device APIs are available
//     //
//     function onDeviceReady() {
//         var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
//         db.transaction(populateDB, errorCB, successCB);
//     }

//     // Populate the database
//     //
//      function populateDB(tx)
//     {
//        tx.executeSql('CREATE TABLE IF NOT EXISTS gantt (id, nom, date_début, durée )');
//     }
//     // Transaction error callback
//     //

// function errorCB(err)
// {
//    alert("Error processing SQL: "+err.code);
// }

// function successCB()
// {
//    alert("success!");
// }
// // function dispAll(tx)
// // {
// //       tx.executeSql('SELECT * FROM tache;', [], function(tx, result){
// //           tache = result.rows;
// //           console.log(tache);
// //           for (i=0; i<tache.length; i++) {
              
// //                $("#table").append("<tr>"+
// //                    "<th scope='col'>" + tache[i].id + "</th>"+
// //                    "<td scope='col'>" + tache[i].nom + "</td>"+
// //                    "<td scope='col'>" + tache[i].debut + "</td>"+
// //                    "<td scope='col'>" + tache[i].duree + "</td></tr>")
               
// //           }
// //       })

// // };


//création de la base de données.
//creation of the database.
function create_db(tx) {
    tx.executeSql('CREATE TABLE task ( `id` int(11) NOT NULL, `nom` text NOT NULL, `date` date NOT NULL, `duree` time NOT NULL)'); 
}

//Configuration de la base de données.
//Configuration of the database.
var db = window.openDatabase('databse_cordova', '1.0', 'bdd_cordova', 1000000);
db.transaction(create_db);

//fonction qui sert à ajouter des valeurs dans la base de données.
function insert(tx){
    tx.executeSql('INSERT INTO task (id, nom, date, duree) VALUES (' + 1 + ', "' + nom + '", "'+ date + '", "'+ duree + '")');
}

//On affiche toutes les données entrées précédemment dans la base de données.
db.transaction(dispAll);

//initialisation des variable correspondantes au input plus l'id = 0.
var nom;
var date;
var duree;
var id = 0;

//au click du boutton on récupère les valeurs des input et on séléctionne toutes les valeurs de la table.
$('#submit').click(function(){
    nom = $('#nom').val();
    date = $('#date').val();
    duree = $('#duree').val();

    db.transaction(selectAll);
});

//fonction qui sert a afficher.
function dispAll(tx)
{
    //on récupère toutes les valeurs de la base de données.
    tx.executeSql('SELECT * FROM task;', [], function(tx, result){
        task = result.rows;
        console.log(task);
        for (i = 0; i<task.length; i++) {
            
            //et on affichage le tout dans la div "class=result".
            $(".result").append(
                "<div id='tasks_infos' class='text-center'>"
                    + task[i].id + " " 
                    + task[i].nom + " "
                    + task[i].date + " "
                    + task[i].duree 
                + "</div>")
        }
    })
};


//fonction qui sert à séléctionner toutes les valeurs de la base de données.
function selectAll(tx)
{
    //on récupère toutes les valeurs de la base de données.
    tx.executeSql('SELECT * FROM task;', [], function(tx, result){
        task = result.rows;
        for( i = 0; i<task.length;i++){
            id = i;
        }
        console.log(task);
        //on utilise la fonction insert en même temps que la fonction selectAll pour envoyer les données dans la table.
        db.transaction(insert);
      })

};