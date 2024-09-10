<?php

namespace App\Http\Services;

use App\Interfaces\UserServiceInterface;
use App\Models\User;

class UserService implements UserServiceInterface {
    public function getAll()
    {
        return User::all();
    }
}
