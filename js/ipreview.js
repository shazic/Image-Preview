Vue.component('image-uploader', 
{
    template:
    `
    <div>
        <div class="row">
            <div class="card col-md-4 mx-auto border border-primary rounded-circle">
                
                <img class="card-img-top rounded-circle my-3" :src="image" alt="Profile Picture">
                
                <div class="card-img-overlay">  
                    <label class="btn btn-sm btn-primary rounded-circle" :for="elementId"><i class="fas fa-pencil-alt fa-2x"></i></label>
                    <input type="file" :name="elementId" :id="elementId" @change="changePic" hidden="true">
                </div>
            </div>
        </div>

        <div class="row">
            <button class="btn btn-primary mx-auto my-4" :disabled="disabled">Update</button>
        </div>
    </div>
    `,

    props: ['source', 'sourceId'],

    data: function()	{
        return { 
            image: "",
            elementId: "",
            disabled: true
         };
    },

    created: function()	{
        this.image = this.source;
        this.elementId = this.sourceId;
        this.disabled = true;
    },

    methods:	{
        changePic(event){
            
            var source = event.target;                      // The DOM input element.
            
            if (source.files && source.files[0]) 
            {
                var newImage = source.files[0];             // The new image source.
                var reader = new FileReader();

                // Callback function that would be called when FileReader is done.
                reader.onload = (loadEvent) => {
                    this.image = loadEvent.target.result;   // The read image is set to the data field "image".
                    this.disabled = false;
                }
                
                reader.readAsDataURL(newImage);             // Read the file as a data url which is in the base64 format.
            }
        }
    }
});

app = new Vue({
    el: "#profile",
});