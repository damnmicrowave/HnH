import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/colors.dart';

import '../services/api.dart';

class FormPage extends StatefulWidget {
  const FormPage({Key? key}) : super(key: key);

  @override
  FormPageState createState() {
    return FormPageState();
  }
}

class FormPageState extends State<FormPage> {
  final _formKey = GlobalKey<FormState>();

  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  void dispose() {
    // Clean up the controllers when the widget is disposed.
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  void login() async {
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    scaffoldMessenger.showSnackBar(const SnackBar(
      content: Text('Logging in...'),
      duration: Duration(minutes: 1),
    ));

    final loggedIn = await api.login(
        emailController.text.toLowerCase(), passwordController.text);
    scaffoldMessenger.hideCurrentSnackBar();
    if (!loggedIn) {
      scaffoldMessenger.showSnackBar(const SnackBar(
        content: Text('Incorrect e-mail or password'),
      ));
      return;
    }

    Navigator.pushNamed(context, '/landing');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        color: const Color(0xFFE2E5F8),
        padding: const EdgeInsets.only(top: 120, left: 40, right: 40),
        child: Column(
          children: [
            SizedBox(
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
                    padding: const EdgeInsets.only(left: 20),
                    margin: const EdgeInsets.only(bottom: 10),
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Colors.white60),
                    child: TextFormField(
                      controller: emailController,
                      decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: 'acehub@example.com',
                        labelText: 'Email',
                        labelStyle: TextStyle(
                            fontSize: 18,
                            color: const AppColors().primaryColor(),
                            fontWeight: FontWeight.w600),
                      ),
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Colors.white60),
                    padding: const EdgeInsets.only(left: 20),
                    child: TextFormField(
                      controller: passwordController,
                      decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: '',
                        labelText: 'Password',
                        labelStyle: TextStyle(
                            fontSize: 18,
                            color: const AppColors().primaryColor(),
                            fontWeight: FontWeight.w600),
                      ),
                    ),
                  ),
                  Center(
                    child: Container(
                        width: 250,
                        height: 50,
                        margin: const EdgeInsets.only(top: 20),
                        child: ElevatedButton(
                            style: ButtonStyle(
                              backgroundColor: MaterialStateProperty.all<Color>(
                                  const AppColors().primaryColor()),
                            ),
                            child: const Text(
                              'Log in',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 24,
                                  letterSpacing: 1.5),
                            ),
                            onPressed: login)),
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
