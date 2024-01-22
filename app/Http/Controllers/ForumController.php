<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Resources\ForumCollection;
use App\Models\Forum;
use Illuminate\Http\Request;

class ForumController extends Controller
{
    public function index()
    {
        $komp = new ForumCollection(Forum::paginate(100));
        return Inertia::render('Forums', [
            'data' => $komp,
        ]);
    }

    public function storeForum(Request $request)
    {
        $forum = new Forum();

        $forum->judul = $request->judul;
        $forum->deskripsi = $request->deskripsi;
        $forum->kategori = $request->kategori;
        $forum->author = auth()->user()->email;
        $forum->save();


        return redirect()->back()->with('message', 'pertanyaan berhasil dipublish');
        // kalo mau ke index forums lagi
        // return redirect('/forums')->with('message', 'Pertanyaan berhasil dikirim ke forum');
    }

    public function showForum(Forum $forum)
    {
        $myForum = $forum::where('author', auth()->user()->email)->get();
        return Inertia::render('ForumDashboard', ['myForum' => $myForum]);
    }

    public function edit(Forum $forum, Request $req)
    {
        return Inertia::render('EditForum', ['myForum' => $forum->find($req->id)]);
    }

    public function update(Request $req)
    {
        Forum::where('id', $req->id)->update([
            'judul' => $req->judul,
            'kategori' => $req->kategori,
            'deskripsi' => $req->deskripsi,
        ]);
        return to_route('dashboardforums');
    }

    public function destroy(Request $req)
    {
        $forum = Forum::find($req->id);
        $forum->delete();
        return redirect()->back();
    }
}
