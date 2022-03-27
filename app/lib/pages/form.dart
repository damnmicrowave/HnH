import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/colors.dart';

class FormPage extends StatefulWidget {
  @override
  FormPageState createState() {
    return FormPageState();
  }
}

class FormPageState extends State<FormPage> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        color: Color(0xFFE2E5F8),
        padding: EdgeInsets.only(top: 120, left: 40, right: 40),
        child: Column(
          children: [
            Container(
              height: 50,
              child: Text.rich(
                TextSpan(
                    text: 'Welcome to ',
                    style: TextStyle(
                      fontSize: 24,
                      color: const AppColors().primaryColor(),
                      letterSpacing: 2,
                      fontWeight: FontWeight.w600,
                    ),
                    children: const [
                      TextSpan(
                          text: 'ACE',
                          style: TextStyle(
                            fontWeight: FontWeight.w900,
                            color: Color(0xFF202C3D),
                          )),
                      TextSpan(
                          text: 'hub! ',
                          style: TextStyle(fontWeight: FontWeight.w900)),
                    ]),
              ),
            ),
            Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Container(
                    padding: EdgeInsets.only(left: 20),
                    margin: EdgeInsets.only(bottom: 10),
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Colors.white60),
                    child: TextFormField(
                      decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: 'acehub@example.com',
                        labelText: 'Email',
                        labelStyle: TextStyle(
                            fontSize: 18,
                            color: AppColors().primaryColor(),
                            fontWeight: FontWeight.w600),
                      ),
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Colors.white60),
                    padding: EdgeInsets.only(left: 20),
                    child: TextFormField(
                      decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: '',
                        labelText: 'Password',
                        labelStyle: TextStyle(
                            fontSize: 18,
                            color: AppColors().primaryColor(),
                            fontWeight: FontWeight.w600),
                      ),
                    ),
                  ),
                  Center(
                    child: Container(
                        width: 250,
                        height: 50,
                        margin: EdgeInsets.only(top: 20),
                        child: ElevatedButton(
                            style: ButtonStyle(
                              backgroundColor: MaterialStateProperty.all<Color>(
                                  AppColors().primaryColor()),
                            ),
                            child: const Text(
                              'Log in',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 24,
                                  letterSpacing: 1.5),
                            ),
                            onPressed: () {
                              Navigator.pushNamed(context, '/landing');
                            })),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
