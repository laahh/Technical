@extends('layouts.app')
@section('content')

<div class="row">
    <div class="col-12">
        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0">Datatables</h4>

            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                    <li class="breadcrumb-item active">Datatables</li>
                </ol>
            </div>

        </div>
    </div>
</div>


<div class="container mt-5">
    <!-- Modal -->
    <form id="ajaxForm">
        <div class="modal fade ajax-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" id="ajax-modal">
                <div class="modal-content">
                    <div class="modal-header ">
                        <h1 class="modal-title fs-5 mb-3" id="modal-title"></h1>
                        <button type="button" class="btn-close mb-3" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="customer_id" id="customer_id">
                        <div class="form-group mb-3">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" class="form-control">
                            <span id="nameError" class="text-danger"></span>
                        </div>
                        <div class="form-group mb-1">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" class="form-control">
                            <span id="emailError" class="text-danger"></span>
                        </div>
                        <div class="form-group mt-3" id="statusContainer" style="display: none;">
                            <label for="status">Status</label>
                            <select type="text" class="form-select">
                                <option value="NEW CUSTOMER">New Customer</option>
                                <option value="LOYAL CUSTOMER">Loyal Customer</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class=" mt-3 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class=" mt-3 btn btn-primary" id="saveBtn"></button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header d-flex align-items-center">
                <h5 class="card-title mb-0 flex-grow-1">Customer CRUD Master</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Tambah Customer
                </button>
            </div>
            <div class="card-body">

                <table id="customerTable" class="table table-nowrap dt-responsive table-bordered display"
                    style="width:100%">
                    <thead>
                        <tr>
                            <th scope="col">ID Customer</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>








<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<!-- Include SweetAlert CSS and JS -->


<script>
    // konfigurasi ajax
    $(document).ready(function(){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });


        // DataTable
        var table = $('#customerTable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('customers.index') }}", // URL untuk mengambil data
            columns: [
                {data: 'user_id', name: 'user_id'},
                {data: 'name', name: 'name'},
                {data: 'email', name: 'email'},
                {data: 'status', name: 'status'},
                {data: 'action', name: 'action', orderable: false, searchable: false},
            ]
        });

        // Set judul modal dan tombol simpan
        $('#modal-title').html('Create Customer');
        $('#saveBtn').html('Save Customer');

        // Ambil form
        var form =  $('#ajaxForm')[0];

        //Event click untuk tombol simpan
        $('#saveBtn').click(function(){
            var formData = new FormData(form); // Ambil data dari form
            
            $.ajax({
                url:'{{ Route("customers.store") }}', // URL untuk menambahkan data
                method: 'POST', // Metode POST
                
                processData : false, // Menonaktifkan proses pengolahan data
                contentType : false, // Menonaktifkan pengolahan konten
                data: formData, // Data yang akan dikirim
                success: function(response){ 
                    if(response.success) {
                        Swal.fire({
                            title: 'Created!',
                            text: response.message,
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                $('#ajaxForm')[0].reset();
                                // Close modal
                                $('#exampleModal').modal('hide');
                                // Remove modal backdrop manually
                                $('body').removeClass('modal-open');
                                $('.modal-backdrop').remove();


                                // Add new data to DataTable
                                table.row.add({
                                user_id: response.customer.user_id,
                                name: response.customer.name,
                                email: response.customer.email,
                                status: response.customer.status,
                                action: '<a href="javascript:void(0)" class="edit btn btn-primary btn-sm mx-2">Edit</a>' +
                                        '<a href="javascript:void(0)" class="delete btn btn-danger btn-sm">Delete</a>'
                            }).draw(false);


                            }
                        });
                    }
                },
                error: function(xhr, status, error){
                var response = JSON.parse(xhr.responseText);
                if(response.errors) {
                    $('#nameError').html(response.errors.name ? response.errors.name[0] : '');
                    $('#emailError').html(response.errors.email ? response.errors.email[0] : '');
                } else {
                    console.error('Unexpected error format:', response);
                }
            }
        });
        })
    });

    //edit
    // event untuk tombol edit
    $('body').on('click', '.edit', function () {
        var id = $(this).data('id'); //Ambil id dari atribut data-id

        // Kirim permintaan AJAX untuk mendapatkan data
        $.ajax({
            url: "{{ route('customers.edit', ':id') }}".replace(':id', id), // URL untuk edit data
            type: 'GET', // Metode GET
            dataType: 'json', 
            success: function (data) {
                $('#customer_id').val(data.customer.user_id);
                $('#name').val(data.customer.name);
                $('#email').val(data.customer.email);
                
                $('#modal-title').html('Edit Customer');
                $('#saveBtn').html('Edit Customer');
                $('#exampleModal').modal('show');
                $('#statusContainer').show(); 
                $('#status').val(data.customer.status);
            }
            
        })
        
    });

    //delete
    $(document).ready(function() {
    var table = $('#customerTable').DataTable(); // Inisialisasi DataTable

    $('body').on('click', '.delete', function () {
        var id = $(this).data('id');

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "{{ route('customers.destroy', ':id') }}".replace(':id', id),
                    type: 'DELETE',
                    success: function(response) {
                        if(response.success) {
                            Swal.fire(
                                'Deleted!',
                                response.message,
                                'success'
                            );
                            // Menghapus baris dari DataTable
                            table.row($('a[data-id="'+id+'"]').closest('tr')).remove().draw();
                        } else {
                            Swal.fire(
                                'Error!',
                                'Something went wrong.',
                                'error'
                            );
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Delete error:', xhr.responseText);
                        Swal.fire(
                            'Error!',
                            'Something went wrong.',
                            'error'
                        );
                    }
                });
            }
        });
    });
});







    $('#exampleModal').on('shown.bs.modal', function () {
        if ($('#customer_id').val()) {
            $('#statusContainer').show();
        } else {
            $('#statusContainer').hide();
        }
    });

    // Reset form when modal is closed
    $('#exampleModal').on('hidden.bs.modal', function() {
            $('#ajaxForm')[0].reset();
            $('#modal-title').html('Create Customer');
            $('#saveBtn').html('Save Customer');
            $('#statusContainer').hide();
            $('#nameError').html('');
            $('#emailError').html('');
            $('#customer_id').val('');
        });

        $('#addCustomerBtn').click(function() {
            $('#ajaxForm')[0].reset();
            $('#modal-title').html('Create Customer');
            $('#saveBtn').html('Save Customer');
            $('#statusContainer').hide();
            $('#nameError').html('');
            $('#emailError').html('');
            $('#customer_id').val('');
        });
    


    

    



    // delete




</script>

{{-- <script>
    $(document).ready(function(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // DataTable
    var table = $('#customerTable').DataTable({
        processing: true,
        serverSide: true,
        ajax: "{{ route('customers.index') }}",
        columns: [
            {data: 'user_id', name: 'user_id'},
            {data: 'name', name: 'name'},
            {data: 'email', name: 'email'},
            {data: 'status', name: 'status'},
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });

    $('#modal-title').html('Create Customer');
    $('#saveBtn').html('Save Customer');
    var form = $('#ajaxForm')[0];

    $('#saveBtn').click(function(){
        var formData = new FormData(form);
        var url = $('#customer_id').val() ? '{{ route("customers.update", ":id") }}'.replace(':id', $('#customer_id').val()) : '{{ route("customers.store") }}';
        var method = $('#customer_id').val() ? 'PUT' : 'POST';

        $.ajax({
            url: url,
            method: method,
            processData: false,
            contentType: false,
            data: formData,
            success: function(response){
                if(response.success) {
                    Swal.fire({
                        title: 'Success!',
                        text: response.message,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            $('#ajaxForm')[0].reset();
                            $('#exampleModal').modal('hide');
                            $('body').removeClass('modal-open');
                            $('.modal-backdrop').remove();

                            if (method === 'POST') {
                                table.row.add({
                                    user_id: response.customer.user_id,
                                    name: response.customer.name,
                                    email: response.customer.email,
                                    status: response.customer.status,
                                    action: '<a href="javascript:void(0)" class="edit btn btn-primary btn-sm mx-2" data-id="' + response.customer.id + '">Edit</a>' +
                                            '<a href="javascript:void(0)" class="delete btn btn-danger btn-sm" data-id="' + response.customer.id + '">Delete</a>'
                                }).draw(false);
                            } else {
                                table.row('.selected').data({
                                    user_id: response.customer.user_id,
                                    name: response.customer.name,
                                    email: response.customer.email,
                                    status: response.customer.status,
                                    action: '<a href="javascript:void(0)" class="edit btn btn-primary btn-sm mx-2" data-id="' + response.customer.id + '">Edit</a>' +
                                            '<a href="javascript:void(0)" class="delete btn btn-danger btn-sm" data-id="' + response.customer.id + '">Delete</a>'
                                }).draw(false);
                            }
                        }
                    });
                }
            },
            error: function(xhr, status, error){
                var response = JSON.parse(xhr.responseText);
                if(response.errors) {
                    $('#nameError').html(response.errors.name ? response.errors.name[0] : '');
                    $('#emailError').html(response.errors.email ? response.errors.email[0] : '');
                } else {
                    console.error('Unexpected error format:', response);
                }
            }
        });
    });

    // Edit
    $('body').on('click', '.edit', function () {
        var id = $(this).data('id');
        $.ajax({
            url: "{{ route('customers.edit', ':id') }}".replace(':id', id),
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $('#customer_id').val(data.customer.id);
                $('#name').val(data.customer.name);
                $('#email').val(data.customer.email);
                $('#status').val(data.customer.status);
                $('#modal-title').html('Edit Customer');
                $('#saveBtn').html('Update Customer');
                $('#exampleModal').modal('show');
            }
        });
    });

    // Delete
    $('body').on('click', '.delete', function () {
        var id = $(this).data('id');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "{{ route('customers.destroy', ':id') }}".replace(':id', id),
                    type: 'DELETE',
                    success: function(response) {
                        if(response.success) {
                            Swal.fire(
                                'Deleted!',
                                response.message,
                                'success'
                            );
                            table.row($('a[data-id="'+id+'"]').parents('tr')).remove().draw();
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Delete error:', xhr.responseText);
                    }
                });
            }
        });
    });
});

</script> --}}

@endsection