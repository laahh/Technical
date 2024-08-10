<!DOCTYPE html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Brancy - Cosmetic &amp; Beauty Salon Website Template</title>
    <meta name="robots" content="noindex, follow">
    <meta name="description" content="Brancy - Cosmetic &amp; Beauty Salon Website Template">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords"
        content="bootstrap, ecommerce, ecommerce html, beauty, cosmetic shop, beauty products, cosmetic, beauty shop, cosmetic store, shop, beauty store, spa, cosmetic, cosmetics, beauty salon">
    <meta name="author" content="codecarnival">

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/images/favicon.webp') }}">

    <!-- CSS (Font, Vendor, Icon, Plugins & Style CSS files) -->

    <!-- Font CSS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap"
        rel="stylesheet">

    <!-- Vendor CSS (Bootstrap & Icon Font) -->
    <link rel="stylesheet" href="{{ asset('css/vendor-bootstrap.min.css') }}">

    <!-- Plugins CSS (All Plugins Files) -->
    <link rel="stylesheet" href="{{ asset('css/plugins-swiper-bundle.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/plugins-font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/plugins-fancybox.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/plugins-nice-select.css') }}">

    <!-- Style CSS -->
    <link rel="stylesheet" href="{{ asset('css/css-style.min.css') }}">



    <!-- React and ReactDOM CDN -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])



</head>

<body>
    <div class="wrapper">

        <main class="main-content">
            <div id="app"></div>


        </main>

    </div>








    <!-- Scripts -->
    <!-- React and ReactDOM -->
    <script src="{{ asset('js/vendor-modernizr-3.11.7.min.js') }}"></script>
    <script src="{{ asset('js/vendor-jquery-3.6.0.min.js') }}"></script>
    <script src="{{ asset('js/vendor-jquery-migrate-3.3.2.min.js') }}"></script>
    <script src="{{ asset('js/vendor-bootstrap.bundle.min.js') }}"></script>

    <!-- Plugins JS -->
    <script src="{{ asset('js/plugins-swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('js/plugins-fancybox.min.js') }}"></script>
    <script src="{{ asset('js/plugins-jquery.nice-select.min.js') }}"></script>

    <!-- Custom Main JS -->
    <script src="{{ asset('js/js-main.js') }}"></script>


</body>


</html>