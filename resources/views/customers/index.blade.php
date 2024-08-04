@extends('layouts.app')
@section('content')


<div class="container mt-5">
    <h1>Customer CRUD with Datatables</h1>
    <a class="btn btn-success" href="javascript:void(0)" id="createNewCustomer"> Create New Customer</a>
    <table class="table table-bordered data-table">
        <thead>
            <tr>
                <th>No</th>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th width="100px">Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</div>

<div class="modal fade" id="ajaxModel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="modelHeading"></h4>
            </div>
            <div class="modal-body">
                <form id="customerForm" name="customerForm" class="form-horizontal">
                    <input type="hidden" name="customer_id" id="customer_id">
                    <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">Name</label>
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Name"
                                value="" maxlength="50" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-12">
                            <input type="email" id="email" name="email" required="" placeholder="Enter Email"
                                class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary" id="saveBtn" value="create">Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script type="">
    $(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var table = $('.data-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: "{{ route('customers.index') }}",
        columns: [
            {data: 'DT_RowIndex', name: 'DT_RowIndex'},
            {data: 'user_id', name: 'user_id'},
            {data: 'name', name: 'name'},
            {data: 'email', name: 'email'},
            {data: 'status', name: 'status'},
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ]
    });

    $('#createNewCustomer').click(function () {
        $('#saveBtn').val("create-customer");
        $('#customer_id').val('');
        $('#customerForm').trigger("reset");
        $('#modelHeading').html("Create New Customer");
        $('#ajaxModel').modal('show');
    });

    $('body').on('click', '.edit', function () {
        var customer_id = $(this).data('id');
        $.get("{{ route('customers.index') }}/" + customer_id + "/edit", function (data) {
            $('#modelHeading').html("Edit Customer");
            $('#saveBtn').val("edit-customer");
            $('#ajaxModel').modal('show');
            $('#customer_id').val(data.id);
            $('#name').val(data.name);
            $('#email').val(data.email);
        });
    });

    $('#saveBtn').click(function (e) {
        e.preventDefault();
        $(this).html('Sending..');

        var formData = $('#customerForm').serialize();
        var state = $('#saveBtn').val();
        var type = "POST";
        var url = "{{ route('customers.store') }}";

        if (state == "edit-customer") {
            type = "PUT";
            url = "{{ route('customers.update', ':id') }}";
            url = url.replace(':id', $('#customer_id').val());
        }

        $.ajax({
            data: formData,
            url: url,
            type: type,
            dataType: 'json',
            success: function (data) {
                $('#customerForm').trigger("reset");
                $('#ajaxModel').modal('hide');
                table.draw();
                Toastify({
                    text: "Data saved successfully!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                }).showToast();
            },
            error: function (data) {
                console.log('Error:', data);
                $('#saveBtn').html('Save Changes');
                Toastify({
                    text: "Error saving data!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                }).showToast();
            }
        });
    });

    $('body').on('click', '.delete', function () {
        var customer_id = $(this).data("id");
        if (confirm("Are you sure you want to delete?")) {
            $.ajax({
                type: "DELETE",
                url: "{{ route('customers.destroy', ':id') }}".replace(':id', customer_id),
                success: function (data) {
                    table.draw();
                    Toastify({
                        text: "Data deleted successfully!",
                        duration: 3000,
                        gravity: "top",
                        position: "right",
                        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    }).showToast();
                },
                error: function (data) {
                    console.log('Error:', data);
                    Toastify({
                        text: "Error deleting data!",
                        duration: 3000,
                        gravity: "top",
                        position: "right",
                        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                    }).showToast();
                }
            });
        }
    });
});

</script>

@endsection