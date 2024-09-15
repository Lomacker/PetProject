<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Interfaces\UserServiceInterface;
use Illuminate\Support\Facades\App;

class IndexController extends Controller
{
    public function __invoke(): string
    {
        $userService = App::make(UserServiceInterface::class);
        $users = $userService->getAll();
        // dump($users);
//        phpinfo();
        return phpinfo();
    }
}
