
<?php
// set to run indefinitely if needed
set_time_limit(0);
require_once 'init.php';

use Symfony\Component\Console\Application;

// Database connection
$app = new Silex\Application();
$config = new \Config();
$config = $config->get();
$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'    => 'pdo_mysql',
        'host'      => 'localhost',
        'dbname'    => 'hetic_pokedex',
        'user'      => $config['db']['user'],
        'password'  => $config['db']['pass'],
        'charset'   => 'utf8',
    )
));

$app['db']->setFetchMode(PDO::FETCH_OBJ);

$application = new Application();
$application->add(new \MyCommand\InstallDBCommand($app));
$application->add(new \MyCommand\UpdateDBCommand($app));
$application->add(new \MyCommand\CreateDBForSiteCommand($app));
$application->add(new \MyCommand\InsertKeywDBCommand($app));
$application->run();
