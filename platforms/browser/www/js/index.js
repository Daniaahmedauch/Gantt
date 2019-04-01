document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

    // Populate the database
    //
     function populateDB(tx)
    {
       tx.executeSql('CREATE TABLE IF NOT EXISTS gantt (id, nom, date_début, durée )');
    }
    // Transaction error callback
    //

function errorCB(err)
{
   alert("Error processing SQL: "+err.code);
}

function successCB()
{
   alert("success!");
}