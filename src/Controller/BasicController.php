<?php

namespace Controller;

use Symfony\Component\HttpFoundation\Response;

class BasicController
{
  private $app;

  public function __construct($app){
    $this->app = $app;
  }

  public function index()
  {
    return new Response($this->app['twig']->render('home.twig'));
  }
  public function hello()
  {
    return new Response($this->app['twig']->render('hello.twig'));
  }
}
