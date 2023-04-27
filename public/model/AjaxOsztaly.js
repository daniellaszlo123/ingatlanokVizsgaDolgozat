class AjaxOsztaly{
    #token
    constructor(token){
        this.#token=token
    }

    adatLeker(vegpont, myCallback){
        const tomb=[]
        $.ajax({
            contentType: "application/json",
            dataTyoe: "json",
            url: vegpont,
            type: "GET",
            success: function (result) {
                $.each(result, function (index, element) {
                    tomb.push(element)
                })
                myCallback(tomb)
            }
        })
    }

    adatTorol(vegpont, adat){
        vegpont+=adat.id
        $.ajax({
            headers:{"X-CSRF-TOKEN" : this.#token},
            url: vegpont,
            type: "DELETE",
            success: function () {
                console.log("sikeres törlés");
            },
            error: function (err) {
                console.error(err);
            }
        })
    }

    adatUj(vegpont, adat){
        $.ajax({
            headers:{"X-CSRF-TOKEN" : this.#token},
            url: vegpont,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(adat),
            success: function () {
                console.log("sikeres törlés");
            },
            error: function (err) {
                console.error(err);
            }
        })
    }
}

export default AjaxOsztaly