<?php

namespace Controller;

use Symfony\Component\HttpFoundation\Response;
require_once __DIR__.'/../Models/Test.class.php';
//die(__DIR__.'/Test.class.php');
//use Models\Models;
/**
 *
 */

 /*

 Je souhaite récuérer mes models de mon dossier models pour les utilisers dans mes controlers mais ça ne fonctionne pas. En essayant de faire petit à petit j'essaye
 de déclarer ma valeur directement dans cette page en dehors de la classe mais elle devient nulle lorsque je veux l'appeler dans la classe.
 */

$foo = "hello";
//$testModel = new Test();

abstract class Base
{
  protected $app, $foo;

  public function __construct($app)
  {
    $this->app = $app;
    $this->foo = $foo;
  }
}

class TestController extends Base
{
  public function test()
  {
    global $foo;
    //$foo = 'zerezrze';
    $data = array(
      'value' => $foo
    );
    return new Response($this->app['twig']->render('test.twig',$data));
  }
}
