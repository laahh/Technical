<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">{{ __('Login') }}</div>
                    <div class="card-body">
                        <form id="login-form">
                            @csrf
                            <div class="mb-3">
                                <label for="name" class="form-label">{{ __('Username') }}</label>
                                <input id="name" type="text" class="form-control" name="name" required
                                    autocomplete="name" autofocus>
                                <span class="invalid-feedback" id="name-error" role="alert"></span>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">{{ __('Password') }}</label>
                                <input id="password" type="password" class="form-control" name="password" required
                                    autocomplete="current-password">
                                <span class="invalid-feedback" id="password-error" role="alert"></span>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="remember" name="remember">
                                <label class="form-check-label" for="remember">{{ __('Remember Me') }}</label>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                {{ __('Login') }}
                            </button>
                            @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                            @endif
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
        $('#login-form').on('submit', function(e) {
            e.preventDefault();

            var form = $(this);
            var url = '{{ route('login') }}';
            var method = 'POST';

            $.ajax({
                url: url,
                type: method,
                data: form.serialize(),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(response) {
                    window.location.href = response.redirect;
                },
                error: function(xhr) {
                    var errors = xhr.responseJSON.errors;
                    if (errors.name) {
                        $('#name').addClass('is-invalid');
                        $('#name-error').text(errors.name[0]);
                    } else {
                        $('#name').removeClass('is-invalid');
                        $('#name-error').text('');
                    }
                    if (errors.password) {
                        $('#password').addClass('is-invalid');
                        $('#password-error').text(errors.password[0]);
                    } else {
                        $('#password').removeClass('is-invalid');
                        $('#password-error').text('');
                    }
                    if (errors) {
                        alert('Login failed');
                    }
                }
            });
        });
    });
    </script>
</body>

</html>